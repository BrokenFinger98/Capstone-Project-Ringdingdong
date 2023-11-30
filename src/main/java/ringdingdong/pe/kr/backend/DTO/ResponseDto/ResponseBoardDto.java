package ringdingdong.pe.kr.backend.DTO.ResponseDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ringdingdong.pe.kr.backend.Entity.Comment;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ResponseBoardDto {

    private Long id;
    private String title;
    private String contents;
    private String writer;
    private List<Comment> comments = new ArrayList<>();
    private LocalDateTime createTime;
    private LocalDateTime modifiedTime;

    @Builder
    public ResponseBoardDto(Long id, String title, String contents, String writer, List<Comment> comments, LocalDateTime createTime, LocalDateTime modifiedTime) {
        this.id = id;
        this.title = title;
        this.contents = contents;
        this.writer = writer;
        this.comments = comments;
        this.createTime = createTime;
        this.modifiedTime = modifiedTime;
    }
}
