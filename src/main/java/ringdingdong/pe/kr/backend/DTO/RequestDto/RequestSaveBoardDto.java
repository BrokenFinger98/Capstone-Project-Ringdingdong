package ringdingdong.pe.kr.backend.DTO.RequestDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RequestSaveBoardDto {

    private String title;
    private String contents;
    private String writer;

    @Builder
    public RequestSaveBoardDto(String title, String contents, String writer) {
        this.title = title;
        this.contents = contents;
        this.writer = writer;
    }
}
