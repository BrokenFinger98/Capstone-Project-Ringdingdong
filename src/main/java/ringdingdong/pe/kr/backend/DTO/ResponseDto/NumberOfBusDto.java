package ringdingdong.pe.kr.backend.DTO.ResponseDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class NumberOfBusDto {

    private Long hour;
    private Double count;

    @Builder
    public NumberOfBusDto(Long hour, Double count) {
        this.hour = hour;
        this.count = count;
    }
}
