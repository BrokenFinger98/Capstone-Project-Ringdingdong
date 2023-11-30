package ringdingdong.pe.kr.backend.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestSaveBoardDto;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestUpdateBoardDto;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseBoardDto;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseBoardPageDto;
import ringdingdong.pe.kr.backend.Entity.Member;
import ringdingdong.pe.kr.backend.Repository.MemberRepository;
import ringdingdong.pe.kr.backend.Service.BoardServiceImpl;

import java.util.Optional;

@ResponseStatus(HttpStatus.OK)
@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final MemberRepository memberRepository;
    private final BoardServiceImpl boardServiceImpl;

    @GetMapping
    public Page<ResponseBoardPageDto> findBoardPage(Pageable pageable) {
        return boardServiceImpl.findBoardPage(pageable);
    }

    @GetMapping(value = "/{boardId}")
    public ResponseBoardDto board(@PathVariable Long boardId) {
        return boardServiceImpl.findById(boardId);
    }

    @PostMapping(value = "/save")
    public void saveBoard(@RequestBody RequestSaveBoardDto requestSaveBoardDto, Authentication authentication) {
        Optional<Member> member = memberRepository.findByLoginId(authentication.getName());
        requestSaveBoardDto.setWriter(member.get().getName());
        boardServiceImpl.save(requestSaveBoardDto);
    }

    @PatchMapping(value = "/patch")
    public void updateBoard(@RequestBody RequestUpdateBoardDto requestUpdateBoardDto, Authentication authentication) {
        Optional<Member> member = memberRepository.findByLoginId(authentication.getName());
        requestUpdateBoardDto.setWriter(member.get().getName());
        boardServiceImpl.update(requestUpdateBoardDto);
    }

    @DeleteMapping(value = "/{boardId}")
    public void deleteBoard(@PathVariable Long boardId) {
        boardServiceImpl.delete(boardId);
    }
}
