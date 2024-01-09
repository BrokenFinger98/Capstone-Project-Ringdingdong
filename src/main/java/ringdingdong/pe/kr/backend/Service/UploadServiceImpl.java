package ringdingdong.pe.kr.backend.Service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseUploadDto;
import ringdingdong.pe.kr.backend.Entity.Traffic;
import ringdingdong.pe.kr.backend.Entity.Week;
import ringdingdong.pe.kr.backend.Repository.TrafficRepository;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class UploadServiceImpl implements UploadService {

    private final TrafficRepository trafficRepository;
    private final RestTemplate restTemplate;

    @Value("${flask.url}")
    private String url;

    @Override
    public void uploadFile(List<MultipartFile> files, LocalDateTime date, Long marker) {
        DayOfWeek dayOfWeek = date.getDayOfWeek();
        int hour = date.getHour();
        Long time = Long.valueOf(hour);
        Week week = switch (dayOfWeek) {
            case MONDAY -> Week.MON;
            case TUESDAY -> Week.TUE;
            case WEDNESDAY -> Week.WED;
            case THURSDAY -> Week.THU;
            case FRIDAY -> Week.FRI;
            case SATURDAY -> Week.SAT;
            case SUNDAY -> Week.SUN;
        };

        Optional<Traffic> findTraffic = trafficRepository.findByWeekAndTimeAndMarker(week, time, marker);

        String endPoint = "/v1/object-detection/yolov5";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        List<ResponseUploadDto> responseUploadDtoList = files.stream()
                .map(file -> {
                    try {
                        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
                        body.add("image", file.getResource());

                        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

                        ResponseEntity<ResponseUploadDto> responseEntity = restTemplate.exchange(
                                url + endPoint,
                                HttpMethod.POST,
                                requestEntity,
                                ResponseUploadDto.class);

                        if(responseEntity.getBody().getNumberOfCar() == null){
                            responseEntity.getBody().setNumberOfCar(0D);
                        }if(responseEntity.getBody().getNumberOfBus() == null){
                            responseEntity.getBody().setNumberOfBus(0D);
                        }if(responseEntity.getBody().getNumberOfTruck() == null){
                            responseEntity.getBody().setNumberOfTruck(0D);
                        }if(responseEntity.getBody().getNumberOfMotorcycle() == null){
                            responseEntity.getBody().setNumberOfMotorcycle(0D);
                        }

                        return responseEntity.getBody();
                    } catch (RestClientException e) {
                        throw new RuntimeException(e);
                    }
                })
                .collect(Collectors.toList());

        double car = 0;
        double bus = 0;
        double truck = 0;
        double motorcycle = 0;
        double congestion = 0;
        for (ResponseUploadDto responseUploadDto : responseUploadDtoList) {
            car += responseUploadDto.getNumberOfCar();
            bus += responseUploadDto.getNumberOfBus();
            truck += responseUploadDto.getNumberOfTruck();
            motorcycle += responseUploadDto.getNumberOfMotorcycle();
            congestion += responseUploadDto.getCongestion();
        }
        car /= responseUploadDtoList.size();
        bus /= responseUploadDtoList.size();
        truck /= responseUploadDtoList.size();
        motorcycle /= responseUploadDtoList.size();
        congestion /= responseUploadDtoList.size();
        car *= 900;
        bus *= 900;
        truck *= 900;
        motorcycle *= 900;

        if(findTraffic.isPresent()){
            car += findTraffic.get().getNumberOfCar();
            bus += findTraffic.get().getNumberOfBus();
            truck += findTraffic.get().getNumberOfTruck();
            motorcycle += findTraffic.get().getNumberOfMotorcycle();
            congestion += findTraffic.get().getCongestion();
            car /= 2;
            bus /= 2;
            truck /= 2;
            motorcycle /= 2;
            congestion /= 2;

            Traffic traffic = Traffic.builder()
                    .id(findTraffic.get().getId())
                    .time(time)
                    .week(week)
                    .marker(marker)
                    .numberOfCar(car)
                    .numberOfBus(bus)
                    .numberOfTruck(truck)
                    .numberOfMotorcycle(motorcycle)
                    .congestion(congestion)
                    .build();
            trafficRepository.save(traffic);
        }else {
            Traffic traffic = Traffic.builder()
                    .time(time)
                    .week(week)
                    .marker(marker)
                    .numberOfCar(car)
                    .numberOfBus(bus)
                    .numberOfTruck(truck)
                    .numberOfMotorcycle(motorcycle)
                    .congestion(congestion)
                    .build();
            trafficRepository.save(traffic);
        }
    }
}
