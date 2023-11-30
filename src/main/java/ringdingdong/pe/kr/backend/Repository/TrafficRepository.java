package ringdingdong.pe.kr.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseTypeAndCountAndCongestionDto;
import ringdingdong.pe.kr.backend.Entity.Traffic;
import ringdingdong.pe.kr.backend.Entity.Week;

import java.util.List;
import java.util.Optional;

@Repository
public interface TrafficRepository extends JpaRepository<Traffic, Long> {
    @Query("SELECT new ringdingdong.pe.kr.backend.DTO.ResponseDto.ResponseTypeAndCountAndCongestionDto(" +
            "t.numberOfCar, t.numberOfBus, t.numberOfTruck, t.numberOfMotorcycle, t.congestion, t.time) " +
            "FROM Traffic t " +
            "WHERE t.week = :week AND t.marker = :marker " +
            "ORDER BY t.time DESC")
    List<ResponseTypeAndCountAndCongestionDto> findTraffic(@Param("week") Week week, @Param("marker") Long marker);
    Optional<Traffic> findByWeekAndTimeAndMarker(Week week, Long time, Long marker);
}


