package ringdingdong.pe.kr.backend.Service;

import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseTrafficDto;
import ringdingdong.pe.kr.backend.Entity.Week;

import java.util.List;

public interface TrafficService {
    List<ResponseTrafficDto> findTrafficByWeek(Week week, Long marker);
}
