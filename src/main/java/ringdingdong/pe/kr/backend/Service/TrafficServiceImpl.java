package ringdingdong.pe.kr.backend.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.*;
import ringdingdong.pe.kr.backend.Entity.Week;
import ringdingdong.pe.kr.backend.Repository.TrafficRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TrafficServiceImpl implements TrafficService {

    private final TrafficRepository trafficRepository;

    @Override
    public List<ResponseTrafficDto> findTrafficByWeek(Week week, Long marker) {
        List<ResponseTypeAndCountAndCongestionDto> responseTypeAndCountAndCongestionDtoList =
                trafficRepository.findTraffic(week, marker);
        List<ResponseTrafficDto> result = new ArrayList<>();

        // 시간대 별로 결과를 생성
        for (int i = 0; i < 24; ++i) {
            ResponseTrafficDto responseTrafficDto = new ResponseTrafficDto();

            // 현재 시간대의 데이터가 있는지 확인
            boolean hasDataForHour = false;

            // 데이터가 있는 경우 해당 데이터를 가져와서 설정
            for (ResponseTypeAndCountAndCongestionDto dto : responseTypeAndCountAndCongestionDtoList) {
                if (dto.getTime() == i) {
                    responseTrafficDto.setHour(dto.getTime());
                    responseTrafficDto.setNumberOfCar(dto.getNumberOfCar());
                    responseTrafficDto.setNumberOfBus(dto.getNumberOfBus());
                    responseTrafficDto.setNumberOfTruck(dto.getNumberOfTruck());
                    responseTrafficDto.setNumberOfMotorcycle(dto.getNumberOfMotorcycle());
                    responseTrafficDto.setCongestion(dto.getCongestion());

                    hasDataForHour = true;
                    break;
                }
            }

            if (!hasDataForHour) {
                responseTrafficDto.setHour(i);
                responseTrafficDto.setNumberOfCar(0.0);
                responseTrafficDto.setNumberOfBus(0.0);
                responseTrafficDto.setNumberOfTruck(0.0);
                responseTrafficDto.setNumberOfMotorcycle(0.0);
                responseTrafficDto.setCongestion(0.0);
            }
            // 결과에 추가
            result.add(i, responseTrafficDto);
        }

        return result;
    }
}
