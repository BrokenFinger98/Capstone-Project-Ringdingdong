package ringdingdong.pe.kr.backend.DTO.RequestDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ringdingdong.pe.kr.backend.Entity.Role;

@Getter
@Setter
@NoArgsConstructor
public class RequestJoinMemberDto {
    private Long id;
    private String name;
    private String loginId;
    private String password;
    private String phoneNumber;
    private String email;
    private Role role;

    @Builder
    public RequestJoinMemberDto(Long id, String name, String loginId, String password, String phoneNumber, String email, Role role) {
        this.id = id;
        this.name = name;
        this.loginId = loginId;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.role = role;
    }
}
