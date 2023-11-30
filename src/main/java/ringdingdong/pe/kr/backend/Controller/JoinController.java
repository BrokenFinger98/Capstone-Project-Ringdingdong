package ringdingdong.pe.kr.backend.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ringdingdong.pe.kr.backend.DTO.RequestDto.*;
import ringdingdong.pe.kr.backend.Entity.Member;
import ringdingdong.pe.kr.backend.Entity.Role;
import ringdingdong.pe.kr.backend.Service.JoinServiceImpl;

import java.util.Optional;

@ResponseStatus(HttpStatus.OK)
@RestController
@RequestMapping("/join")
@RequiredArgsConstructor
public class JoinController {

    private final JoinServiceImpl joinServiceImpl;

    @PostMapping(value = "/member")
    public void joinMember(@RequestBody RequestJoinMemberDto requestJoinMemberDto) {
        requestJoinMemberDto.setRole(Role.USER);
        joinServiceImpl.joinMember(requestJoinMemberDto);
    }

    @PostMapping(value = "/institution")
    public void joinInstitution(@RequestBody RequestJoinInstitutionDto requestJoinInstitutionDto) {
        requestJoinInstitutionDto.setRole(Role.INSTITUTION);
        joinServiceImpl.joinInstitution(requestJoinInstitutionDto);
    }

    @PostMapping(value = "/findLoginId")
    public String findLoginId(@RequestBody RequestFindLoginIdDto requestFindLoginIdDto) {
        Optional<Member> member = joinServiceImpl.findLoginId(requestFindLoginIdDto);
        if (member.isPresent()) {
            return member.get().getLoginId();
        } else {
            throw new IllegalArgumentException("회원가입된 loginId를 찾을 수 없습니다.");
        }
    }

    @PostMapping(value = "/findPassword")
    public String findPassword(@RequestBody RequestFindPasswordDto requestFindPasswordDto) throws Exception {
        Optional<Member> member = joinServiceImpl.findPassword(requestFindPasswordDto);
        if (member.isPresent()) {
            return member.get().getPassword();
        } else {
            throw new IllegalArgumentException("회원가입된 password를 찾을 수 없습니다.");
        }
    }

    @PostMapping(value = "/checkDuplicateLoginId")
    public String checkDuplicateLoginId(@RequestBody RequestDuplicateLoginIdDto requestDuplicateLoginIdDto) throws Exception {
        Optional<Member> member = joinServiceImpl.checkDuplicateLoginId(requestDuplicateLoginIdDto);
        if (member.isPresent()) {
            throw new IllegalArgumentException("중복된 loginId입니다.");
        } else {
            return "ok";
        }
    }

    @PostMapping(value = "checkDuplicateEmail")
    public String checkDuplicateEmail(@RequestBody RequestDuplicateEmailDto requestDuplicateEmailDto) throws Exception {
        Optional<Member> member = joinServiceImpl.checkDuplicateEmail(requestDuplicateEmailDto);
        if (member.isPresent()) {
            throw new IllegalArgumentException("중복된 email입니다.");
        }
        return "ok";
    }

    @GetMapping(value = "checkDuplicationName")
    public String checkDuplicationName(@RequestBody RequestDuplicateNameDto requestDuplicateNameDto) {
        Optional<Member> member = joinServiceImpl.checkDuplicateName(requestDuplicateNameDto);
        if (member.isPresent()){
            throw new IllegalArgumentException("중복된 name입니다.");
        }
        return "ok";
    }
}
