package ringdingdong.pe.kr.backend.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseMemberInfoDto;
import ringdingdong.pe.kr.backend.Service.MemberServiceImpl;


@ResponseStatus(HttpStatus.OK)
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberServiceImpl memberServiceImpl;

    @GetMapping
    public ResponseMemberInfoDto findMemberInfo(Authentication authentication) {
        return memberServiceImpl.findMemberInfo(authentication);
    }
}
