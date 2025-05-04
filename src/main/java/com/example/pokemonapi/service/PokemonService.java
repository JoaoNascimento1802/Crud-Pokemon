package com.example.pokemonapi.service;

import com.example.pokemonapi.model.Pokemon;
import com.example.pokemonapi.repository.PokemonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PokemonService {

    private final PokemonRepository repository;

    // Não é mais necessário o diretório de upload de imagem, já que vamos usar URLs
    //@Value("${upload.dir:imagens}")
    //private String uploadDir;

    public List<Pokemon> listarTodos() {
        return repository.findAll();
    }

    public Pokemon criarPokemon(String nome, String tipo, Integer numero, String imagemUrl) {
        Pokemon pokemon = new Pokemon();
        pokemon.setNome(nome);
        pokemon.setTipo(tipo);
        pokemon.setNumero(numero);
        pokemon.setImagemUrl(imagemUrl);  // Aqui você usa a URL fornecida
        return repository.save(pokemon);
    }

    public Pokemon buscarPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Pokemon atualizarPokemon(Long id, String nome, String tipo, Integer numero, String imagemUrl) {
        Pokemon pokemon = repository.findById(id).orElse(null);
        if (pokemon != null) {
            pokemon.setNome(nome);
            pokemon.setTipo(tipo);
            pokemon.setNumero(numero);
            if (imagemUrl != null && !imagemUrl.isEmpty()) {
                pokemon.setImagemUrl(imagemUrl);  // Aqui você usa a URL fornecida
            }
            return repository.save(pokemon);
        }
        return null;
    }

    public void deletarPokemon(Long id) {
        repository.deleteById(id);
    }
}
