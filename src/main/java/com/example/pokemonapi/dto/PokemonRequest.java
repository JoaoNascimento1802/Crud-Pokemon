package com.example.pokemonapi.dto;

import jakarta.validation.constraints.Size;

public record PokemonRequest(
        String nome,
        String tipo,
        Integer numero,
        @Size(max = 1000)
        String imagemUrl
) {}
