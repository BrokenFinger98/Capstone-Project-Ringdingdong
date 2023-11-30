package ringdingdong.pe.kr.backend.DTO.ResponseDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class NumberOfMotorcycleDto {

    private Long hour;
    private Double count;

    @Builder
    public NumberOfMotorcycleDto(Long hour, Double count) {
        this.hour = hour;
        this.count = count;
    }
}
