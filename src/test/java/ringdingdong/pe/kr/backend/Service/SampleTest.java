package ringdingdong.pe.kr.backend.Service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ringdingdong.pe.kr.backend.Entity.Traffic;
import ringdingdong.pe.kr.backend.Entity.Week;
import ringdingdong.pe.kr.backend.Repository.TrafficRepository;

@SpringBootTest
public class SampleTest {

    @Autowired
    UploadServiceImpl uploadServiceImpl;

    @Autowired
    TrafficRepository trafficRepository;

    @Test
    public void test(){
        long time = 6;
        Long marker = 1L;
        double numberOfCar = 2449.3;
        double numberOfBus = 394.2;
        double numberOfTruck = 349.2;
        double numberOfMotorcycle = 329.0;
        double congestion = 1.2;
        Week week = Week.MON;
        Traffic traffic = Traffic.builder()
                .time(time)
                .week(week)
                .marker(marker)
                .numberOfCar(numberOfCar)
                .numberOfBus(numberOfBus)
                .numberOfTruck(numberOfTruck)
                .numberOfMotorcycle(numberOfMotorcycle)
                .congestion(congestion)
                .build();
        trafficRepository.save(traffic);
    }
}
