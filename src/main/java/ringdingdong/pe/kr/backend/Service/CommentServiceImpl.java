package ringdingdong.pe.kr.backend.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestSaveCommentDto;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestUpdateCommentDto;
import ringdingdong.pe.kr.backend.Entity.Comment;
import ringdingdong.pe.kr.backend.Repository.BoardRepository;
import ringdingdong.pe.kr.backend.Repository.CommentRepository;
import ringdingdong.pe.kr.backend.Repository.MemberRepository;

@Service
@Transactional
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService{

    private final CommentRepository commentRepository;
    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    @Override
    public void save(RequestSaveCommentDto requestSaveCommentDto) {
        Comment comment = Comment.builder().
                contents(requestSaveCommentDto.getContents()).
                member(memberRepository.findByName(requestSaveCommentDto.getWriter()).get()).
                board(boardRepository.findById(requestSaveCommentDto.getBoardId()).get()).
                build();
        commentRepository.save(comment);
    }

    @Override
    public void update(RequestUpdateCommentDto requestUpdateCommentDto) {
        Comment comment = Comment.builder().
                id(requestUpdateCommentDto.getId()).
                contents(requestUpdateCommentDto.getContents()).
                member(memberRepository.findByName(requestUpdateCommentDto.getWriter()).get()).
                board(boardRepository.findById(requestUpdateCommentDto.getBoardId()).get()).
                build();
        commentRepository.save(comment);
    }

    @Override
    public void delete(Long commentId) {
        commentRepository.deleteById(commentId);
    }
}
