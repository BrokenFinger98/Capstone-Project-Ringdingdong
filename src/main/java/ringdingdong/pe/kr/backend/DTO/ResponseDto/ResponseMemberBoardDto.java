package ringdingdong.pe.kr.backend.DTO.ResponseDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class ResponseMemberBoardDto {

    private Long id;
    private String title;
    private String contents;
    private LocalDateTime modifiedTime;

    @Builder
    public ResponseMemberBoardDto(Long id, String title, String contents, LocalDateTime modifiedTime) {
        this.id = id;
        this.title = title;
        this.contents = contents;
        this.modifiedTime = modifiedTime;
    }
}
