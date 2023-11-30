package ringdingdong.pe.kr.backend.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@ResponseStatus(HttpStatus.OK)
@RestController
@RequiredArgsConstructor
public class StartController {

//    private final StartServiceImpl startServiceImpl;

//    @GetMapping("/")
//    public List<ResponseStartDto> requestStartRestTemplate() {
//        return startServiceImpl.requestStartRestTemplate();
//    }
}
