package ringdingdong.pe.kr.backend.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ringdingdong.pe.kr.backend.DTO.RequestDto.*;
import ringdingdong.pe.kr.backend.Entity.Member;
import ringdingdong.pe.kr.backend.Repository.MemberRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class JoinServiceImpl implements JoinService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder encoder;

    @Override
    public void joinMember(RequestJoinMemberDto requestJoinMemberDto) {
        Member member = Member.builder().
                name(requestJoinMemberDto.getName()).
                loginId(requestJoinMemberDto.getLoginId()).
                password(encoder.encode(requestJoinMemberDto.getPassword())).
                phoneNumber(requestJoinMemberDto.getPhoneNumber()).
                email(requestJoinMemberDto.getEmail()).
                role(requestJoinMemberDto.getRole()).
                build();
        memberRepository.save(member);
    }

    @Override
    public Optional<Member> checkDuplicateLoginId(RequestDuplicateLoginIdDto requestDuplicateLoginIdDto){
        Optional<Member> member = memberRepository.findByLoginId(requestDuplicateLoginIdDto.getLoginId());
        return member;
    }

    @Override
    public Optional<Member>  checkDuplicateEmail(RequestDuplicateEmailDto requestDuplicateEmailDto){
        Optional<Member> member = memberRepository.findByEmail(requestDuplicateEmailDto.getEmail());
        return member;
    }

    @Override
    public Optional<Member> findLoginId(RequestFindLoginIdDto requestFindLoginIdDto){
        Optional<Member> member = memberRepository.findByEmail(requestFindLoginIdDto.getEmail());
        return member;
    }

    @Override
    public Optional<Member>  findPassword(RequestFindPasswordDto requestFindPasswordDto){
        Optional<Member> member = memberRepository.findByLoginIdAndEmail(requestFindPasswordDto.getLoginId(), requestFindPasswordDto.getEmail());
        return member;
    }

    @Override
    public void joinInstitution(RequestJoinInstitutionDto requestJoinInstitutionDto){
        Member member = Member.builder().
                name(requestJoinInstitutionDto.getName()).
                loginId(requestJoinInstitutionDto.getLoginId()).
                password(encoder.encode(requestJoinInstitutionDto.getPassword())).
                phoneNumber(requestJoinInstitutionDto.getPhoneNumber()).
                email(requestJoinInstitutionDto.getEmail()).
                institutionCEO(requestJoinInstitutionDto.getInstitutionCEO()).
                registrationNumber(requestJoinInstitutionDto.getRegistrationNumber()).
                role(requestJoinInstitutionDto.getRole()).
                build();
        memberRepository.save(member);
    }

    public Optional<Member> checkDuplicateName(RequestDuplicateNameDto requestDuplicateNameDto) {
        Optional<Member> member = memberRepository.findByName(requestDuplicateNameDto.getName());
        return member;
    }
}
