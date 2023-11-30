package ringdingdong.pe.kr.backend.DTO.ResponseDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class ResponseMemberCommentDto {

    private Long id;
    private String contents;
    private LocalDateTime modifiedTime;

    @Builder
    public ResponseMemberCommentDto(Long id, String contents, LocalDateTime modifiedTime) {
        this.id = id;
        this.contents = contents;
        this.modifiedTime = modifiedTime;
    }
}
