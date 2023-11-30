package ringdingdong.pe.kr.backend.DTO.RequestDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RequestSaveCommentDto {

    private String contents;
    private Long boardId;
    private String writer;

    @Builder
    public RequestSaveCommentDto(String contents, Long boardId, String writer) {
        this.contents = contents;
        this.boardId = boardId;
        this.writer = writer;
    }
}
