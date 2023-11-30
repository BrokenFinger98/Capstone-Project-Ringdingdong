package ringdingdong.pe.kr.backend.DTO.RequestDto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class RequestFindPasswordDto {

    private String loginId;
    private String email;

    @Builder
    public RequestFindPasswordDto(String loginId, String email) {
        this.loginId = loginId;
        this.email = email;
    }
}
