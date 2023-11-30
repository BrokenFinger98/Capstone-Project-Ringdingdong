package ringdingdong.pe.kr.backend.Service;

import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestSaveCommentDto;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestUpdateCommentDto;

public interface CommentService {
    void save(RequestSaveCommentDto requestSaveCommentDto);
    void update(RequestUpdateCommentDto requestUpdateCommentDto);
    void delete(Long commentId);
}
