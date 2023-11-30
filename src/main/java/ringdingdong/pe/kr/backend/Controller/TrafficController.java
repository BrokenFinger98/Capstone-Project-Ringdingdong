package ringdingdong.pe.kr.backend.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseTrafficDto;
import ringdingdong.pe.kr.backend.Entity.Week;
import ringdingdong.pe.kr.backend.Service.TrafficServiceImpl;

import java.util.List;

@ResponseStatus(HttpStatus.OK)
@RestController
@RequestMapping(value = "/traffic")
@RequiredArgsConstructor
public class TrafficController {

    private final TrafficServiceImpl trafficServiceImpl;

    @GetMapping(value = "/{week}/{marker}")
    public List<ResponseTrafficDto> findTrafficByWeek(@PathVariable Week week, @PathVariable Long marker) {
        return trafficServiceImpl.findTrafficByWeek(week, marker);
    }
}
