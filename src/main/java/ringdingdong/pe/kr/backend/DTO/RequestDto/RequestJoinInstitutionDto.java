package ringdingdong.pe.kr.backend.DTO.RequestDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ringdingdong.pe.kr.backend.Entity.Role;

@Getter
@Setter
@NoArgsConstructor
public class RequestJoinInstitutionDto {

    private Long id;
    private String name;
    private String loginId;
    private String password;
    private String phoneNumber;
    private String email;
    private String institutionCEO;
    private String registrationNumber;
    private Role role;

    @Builder
    public RequestJoinInstitutionDto(Long id, String name, String loginId, String password, String phoneNumber, String email, String institutionCEO, String registrationNumber, Role role) {
        this.id = id;
        this.name = name;
        this.loginId = loginId;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.institutionCEO = institutionCEO;
        this.registrationNumber = registrationNumber;
        this.role = role;
    }
}
