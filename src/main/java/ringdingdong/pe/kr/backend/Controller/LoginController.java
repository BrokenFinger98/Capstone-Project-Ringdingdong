package ringdingdong.pe.kr.backend.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestLoginDto;
import ringdingdong.pe.kr.backend.Service.LoginServiceImpl;

@ResponseStatus(HttpStatus.OK)
@RestController
@RequestMapping(value = "/login")
@RequiredArgsConstructor
public class LoginController {

    private final LoginServiceImpl loginServiceImpl;

    @PostMapping("/data")
    public String login(@RequestBody RequestLoginDto requestLoginDto) {
        return loginServiceImpl.login(requestLoginDto);
    }
}
