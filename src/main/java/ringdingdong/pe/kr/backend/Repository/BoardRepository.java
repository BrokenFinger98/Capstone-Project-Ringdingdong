package ringdingdong.pe.kr.backend.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ringdingdong.pe.kr.backend.Entity.Board;
import ringdingdong.pe.kr.backend.Entity.Member;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    @Override
    Page<Board> findAll(Pageable pageable);
    List<Board> findByMember(Member member);
}
