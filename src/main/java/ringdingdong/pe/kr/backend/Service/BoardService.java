package ringdingdong.pe.kr.backend.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestSaveBoardDto;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestUpdateBoardDto;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseBoardDto;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseBoardPageDto;

public interface BoardService {
    Page<ResponseBoardPageDto> findBoardPage(Pageable pageable);
    ResponseBoardDto findById(Long boardId);
    void save(RequestSaveBoardDto requestSaveBoardDto);
    void update(RequestUpdateBoardDto requestUpdateBoardDto);
    void delete(Long boardId);
}
