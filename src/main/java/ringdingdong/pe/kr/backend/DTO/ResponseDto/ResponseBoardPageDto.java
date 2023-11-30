package ringdingdong.pe.kr.backend.DTO.ResponseDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class ResponseBoardPageDto {

    private Long id;
    private String title;
    private String writer;
    private LocalDateTime modifiedTime;

    @Builder
    public ResponseBoardPageDto(Long id, String title, String writer, LocalDateTime modifiedTime) {
        this.id = id;
        this.title = title;
        this.writer = writer;
        this.modifiedTime = modifiedTime;
    }
}
