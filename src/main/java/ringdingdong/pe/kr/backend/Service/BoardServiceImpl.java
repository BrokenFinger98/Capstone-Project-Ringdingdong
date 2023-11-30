package ringdingdong.pe.kr.backend.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestSaveBoardDto;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestUpdateBoardDto;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseBoardDto;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseBoardPageDto;
import ringdingdong.pe.kr.backend.Entity.Board;
import ringdingdong.pe.kr.backend.Repository.BoardRepository;
import ringdingdong.pe.kr.backend.Repository.MemberRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    @Override
    public Page<ResponseBoardPageDto> findBoardPage(Pageable pageable) {
        Sort sort = Sort.by("modifiedTime").descending();
        PageRequest pageRequest = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), sort);
        Page<Board> boards = boardRepository.findAll(pageRequest);
        Page<ResponseBoardPageDto> responseBoardPageDtos = boards.map(b -> ResponseBoardPageDto.builder().
                id(b.getId()).
                title(b.getTitle()).
                writer(b.getMember().getName()).
                modifiedTime(b.getModifiedTime()).
                build());
        return responseBoardPageDtos;
    }

    @Override
    public ResponseBoardDto findById(Long boardId) {
        Optional<Board> board = boardRepository.findById(boardId);
        if (board.isEmpty()){
            throw new IllegalArgumentException("존재하지 않는 게시글입니다.");
        }else{
            ResponseBoardDto responseBoardDto = ResponseBoardDto.builder().
                    id(board.get().getId()).
                    title(board.get().getTitle()).
                    contents(board.get().getContents()).
                    writer(board.get().getMember().getName()).
                    comments(board.get().getComments()).
                    createTime(board.get().getCreateTime()).
                    modifiedTime(board.get().getModifiedTime()).
                    build();
            return responseBoardDto;
        }
    }

    @Override
    public void save(RequestSaveBoardDto requestSaveBoardDto) {
        Board board = Board.builder().
                title(requestSaveBoardDto.getTitle()).
                contents(requestSaveBoardDto.getContents()).
                member(memberRepository.findByName(requestSaveBoardDto.getWriter()).get()).
                build();
        boardRepository.save(board);
    }

    @Override
    public void update(RequestUpdateBoardDto requestUpdateBoardDto) {
        Board board = Board.builder().
                id(requestUpdateBoardDto.getId()).
                title(requestUpdateBoardDto.getTitle()).
                contents(requestUpdateBoardDto.getContents()).
                member(memberRepository.findByName(requestUpdateBoardDto.getWriter()).get()).
                build();
        boardRepository.save(board);
    }

    @Override
    public void delete(Long boardId) {
        boardRepository.deleteById(boardId);
    }

}
