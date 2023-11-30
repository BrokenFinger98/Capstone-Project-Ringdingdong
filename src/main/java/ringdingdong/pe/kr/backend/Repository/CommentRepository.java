package ringdingdong.pe.kr.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ringdingdong.pe.kr.backend.Entity.Comment;
import ringdingdong.pe.kr.backend.Entity.Member;

import java.util.List;


@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByMember(Member member);
}
