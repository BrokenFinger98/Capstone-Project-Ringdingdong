package ringdingdong.pe.kr.backend.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ringdingdong.pe.kr.backend.DTO.RequestDto.RequestLoginDto;
import ringdingdong.pe.kr.backend.Entity.Member;
import ringdingdong.pe.kr.backend.Repository.MemberRepository;
import ringdingdong.pe.kr.backend.Utils.JwtUtil;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService{

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder encoder;

    @Value("${jwt.secret}")
    private String secretKey;

    private Long expiredMs = 1000 * 60 * 60L;
    @Override
    public String login(RequestLoginDto requestLoginDto) {
        Optional<Member> member = memberRepository.findByLoginId(requestLoginDto.getLoginId());
        if (member.isEmpty()) {
            throw new IllegalArgumentException("가입되지않은 회원입니다.");
        }
        if(!encoder.matches(requestLoginDto.getPassword(), member.get().getPassword())){
            throw new IllegalArgumentException("비밀번호가 틀립니다.");
        }
        String token = JwtUtil.createJwt(member.get().getLoginId(), secretKey, expiredMs);
        return token;
    }
}
