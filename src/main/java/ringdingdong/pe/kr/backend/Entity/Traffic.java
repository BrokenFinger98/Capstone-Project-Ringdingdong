package ringdingdong.pe.kr.backend.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
public class Traffic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "traffic_id")
    private Long id;

    @Column(nullable = false)
    private Long marker;

    @Column(nullable = false)
    private Double numberOfCar;

    @Column(nullable = false)
    private Double numberOfBus;

    @Column(nullable = false)
    private Double numberOfTruck;

    @Column(nullable = false)
    private Double numberOfMotorcycle;

    @Column(nullable = false)
    private Long time;

    @Enumerated(EnumType.STRING)
    private Week week;

    @Column(nullable = false)
    private Double congestion;
}
