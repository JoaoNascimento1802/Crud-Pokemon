package com.example.pokemonapi.controller;

import com.example.pokemonapi.dto.PokemonRequest;
import com.example.pokemonapi.model.Pokemon;
import com.example.pokemonapi.service.PokemonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pokemons")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PokemonController {

    private final PokemonService service;

    @GetMapping
    public List<Pokemon> listarTodos() {
        return service.listarTodos();
    }

    @PostMapping
    public ResponseEntity<Pokemon> criarPokemon(@RequestBody PokemonRequest dto) {
        return new ResponseEntity<>(
                service.criarPokemon(dto.nome(), dto.tipo(), dto.numero(), dto.imagemUrl()),
                HttpStatus.CREATED
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pokemon> buscarPorId(@PathVariable Long id) {
        Pokemon pokemon = service.buscarPorId(id);
        if (pokemon != null) {
            return ResponseEntity.ok(pokemon);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pokemon> atualizarPokemon(
            @PathVariable Long id,
            @RequestParam("nome") String nome,
            @RequestParam("tipo") String tipo,
            @RequestParam("numero") Integer numero,
            @RequestParam("imagemUrl") String imagemUrl // Agora aceitamos apenas a URL da imagem
    ) {
        Pokemon atualizado = service.atualizarPokemon(id, nome, tipo, numero, imagemUrl);
        if (atualizado != null) {
            return ResponseEntity.ok(atualizado);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPokemon(@PathVariable Long id) {
        service.deletarPokemon(id);
        return ResponseEntity.noContent().build();
    }
}
