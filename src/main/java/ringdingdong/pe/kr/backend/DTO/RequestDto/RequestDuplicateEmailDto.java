package ringdingdong.pe.kr.backend.DTO.RequestDto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class RequestDuplicateEmailDto {
    private String email;

    @Builder
    public RequestDuplicateEmailDto(String email) {
        this.email = email;
    }
}
