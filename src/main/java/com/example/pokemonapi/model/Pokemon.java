package com.example.pokemonapi.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Pokemon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String tipo;
    private Integer numero;
    @Column(length = 1000)
    private String imagemUrl;
}
