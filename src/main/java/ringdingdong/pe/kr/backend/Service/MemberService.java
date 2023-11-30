package ringdingdong.pe.kr.backend.Service;

import org.springframework.security.core.Authentication;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseMemberInfoDto;

public interface MemberService {
    ResponseMemberInfoDto findMemberInfo(Authentication authentication);
}
