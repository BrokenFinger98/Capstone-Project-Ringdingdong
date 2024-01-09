package ringdingdong.pe.kr.backend.Service;

import org.springframework.web.multipart.MultipartFile;
import java.time.LocalDateTime;
import java.util.List;

public interface UploadService {
    void uploadFile(List<MultipartFile> files, LocalDateTime date, Long marker);
}