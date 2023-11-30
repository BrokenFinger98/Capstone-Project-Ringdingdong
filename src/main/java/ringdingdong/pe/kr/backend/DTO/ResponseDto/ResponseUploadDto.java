package ringdingdong.pe.kr.backend.DTO.ResponseDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResponseUploadDto {

    private Double numberOfCar;
    private Double numberOfBus;
    private Double numberOfTruck;
    private Double numberOfMotorcycle;
    private Double congestion;

    @Builder
    public ResponseUploadDto(Double numberOfCar, Double numberOfBus, Double numberOfTruck, Double numberOfMotorcycle, Double congestion) {
        this.numberOfCar = numberOfCar;
        this.numberOfBus = numberOfBus;
        this.numberOfTruck = numberOfTruck;
        this.numberOfMotorcycle = numberOfMotorcycle;
        this.congestion = congestion;
    }
}
