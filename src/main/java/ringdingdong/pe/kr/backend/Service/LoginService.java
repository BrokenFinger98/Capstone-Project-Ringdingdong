package ringdingdong.pe.kr.backend.Service;

import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestLoginDto;

public interface LoginService {
    String login(RequestLoginDto requestLoginDto);
}
