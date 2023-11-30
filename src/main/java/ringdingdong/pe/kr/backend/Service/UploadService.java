package ringdingdong.pe.kr.backend.Service;

import org.springframework.web.multipart.MultipartFile;
import ringdingdong.pe.kr.backend.Entity.Week;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

public interface UploadService {
    void uploadFile(List<MultipartFile> files, LocalDateTime date, Long marker);
}