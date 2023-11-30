package ringdingdong.pe.kr.backend.DTO.ResponseDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import ringdingdong.pe.kr.backend.Entity.Role;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ResponseMemberInfoDto {

    private String name;
    private String loginId;
    private String phoneNumber;
    private String email;
    private String institutionName;
    private String institutionCEO;
    private String registrationNumber;
    private Role role;
    private List<ResponseMemberBoardDto> boards = new ArrayList<>();
    private List<ResponseMemberCommentDto> comments = new ArrayList<>();

    @Builder
    public ResponseMemberInfoDto(String name, String loginId, String phoneNumber, String email, String institutionName, String institutionCEO, String registrationNumber, Role role, List<ResponseMemberBoardDto> boards, List<ResponseMemberCommentDto> comments) {
        this.name = name;
        this.loginId = loginId;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.institutionName = institutionName;
        this.institutionCEO = institutionCEO;
        this.registrationNumber = registrationNumber;
        this.role = role;
        this.boards = boards;
        this.comments = comments;
    }
}
