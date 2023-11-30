package ringdingdong.pe.kr.backend.DTO.RequestDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RequestUpdateCommentDto {

    private Long id;
    private String contents;
    private Long boardId;
    private String writer;

    @Builder
    public RequestUpdateCommentDto(Long id, String contents, Long boardId, String writer) {
        this.id = id;
        this.contents = contents;
        this.boardId = boardId;
        this.writer = writer;
    }
}
