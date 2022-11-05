package com.junction.pippo.core.utils;

import java.util.List;

/**

 */
public interface IBeanMapper<Entity, DTO> {
    Entity mapToEntity(DTO viewModel);

    DTO mapToDTO(Entity entity);

    List<Entity> mapToEntity(List<DTO> dtoList);

    List<DTO> mapToDTO(List<Entity> entityList);
}
