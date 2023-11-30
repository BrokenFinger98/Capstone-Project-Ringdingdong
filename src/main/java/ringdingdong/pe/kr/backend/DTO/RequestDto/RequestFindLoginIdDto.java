package ringdingdong.pe.kr.backend.DTO.RequestDto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class RequestFindLoginIdDto {

    private String name;
    private String email;

    @Builder
    public RequestFindLoginIdDto(String name, String email) {
        this.name = name;
        this.email = email;
    }
}
