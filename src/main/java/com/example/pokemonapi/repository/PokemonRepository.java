package com.example.pokemonapi.repository;

import com.example.pokemonapi.model.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonRepository extends JpaRepository<Pokemon, Long> {
}