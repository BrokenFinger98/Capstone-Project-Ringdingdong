package ringdingdong.pe.kr.backend.DTO.ResponseDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class CongestionDto {

    private Long hour;
    private Double count;

    @Builder
    public CongestionDto(Long hour, Double count) {
        this.hour = hour;
        this.count = count;
    }
}
