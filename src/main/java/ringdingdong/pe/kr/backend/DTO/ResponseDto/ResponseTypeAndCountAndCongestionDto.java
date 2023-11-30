package ringdingdong.pe.kr.backend.DTO.ResponseDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResponseTypeAndCountAndCongestionDto {

    private Double numberOfCar;
    private Double numberOfBus;
    private Double numberOfTruck;
    private Double numberOfMotorcycle;
    private Double congestion;
    private Long time;

    @Builder
    public ResponseTypeAndCountAndCongestionDto(Double numberOfCar, Double numberOfBus, Double numberOfTruck, Double numberOfMotorcycle, Double congestion, Long time) {
        this.numberOfCar = numberOfCar;
        this.numberOfBus = numberOfBus;
        this.numberOfTruck = numberOfTruck;
        this.numberOfMotorcycle = numberOfMotorcycle;
        this.congestion = congestion;
        this.time = time;
    }
}
