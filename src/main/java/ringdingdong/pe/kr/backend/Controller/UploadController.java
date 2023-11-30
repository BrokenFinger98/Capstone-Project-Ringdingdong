package ringdingdong.pe.kr.backend.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ringdingdong.pe.kr.backend.Service.UploadServiceImpl;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@ResponseStatus(HttpStatus.OK)
@RestController
@RequestMapping
@RequiredArgsConstructor
public class UploadController {

    private final UploadServiceImpl uploadServiceImpl;

    @PostMapping(value = "/upload/{marker}")
    public void uploadFile(@PathVariable Long marker,
                           @RequestParam(value = "image") List<MultipartFile> files,
                           @RequestParam(value = "date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime date) {
        uploadServiceImpl.uploadFile(files, date, marker);
    }
}