import { Engine } from "piton-engine";
import type { EntityId,EntityManager } from "piton-engine";

/*ENTITY TEMPLATES*/

/*FUNCTIONS*/

/*
createEmptyEntity() //RETURNS AN ENTITY ID WITH 'Transform' , 'EntityActive' , 'Parent' and 'Children' COMPONENT ATTACHED.
createSpriteEntity() //RETURNS AN ENTITY ID WITH SAME COMPONENTS AS `createEmptyEntity()` + 'Sprite' COMPONENT
createSceneEntity() //RETURNS AN ENTITY ID WITH 'Transform' , 'EntityActive' 'Children' and 'Scene' COMPONENT
createRectangleEntity() //RETURNS AN ENTITY ID WITH SAME COMPONENTS AS `createEmptyEntity` + Shape AND `Shape.shape` SET TO RECTANGLE
createCircleEntity() //RETURNS AN ENTITY ID WITH SAME COMPONENTS AS `createEmptyEntity` + Shape AND `Shape.shape` SET TO CIRCLE
createTriangleEntity() //RETURNS AN ENTITY ID WITH SAME COMPONENTS AS `createEmptyEntity` + Shape AND `Shape.shape` SET TO TRIANGLE
createTextEntity() //RETURNS AN ENTITY ID WITH SAME COMPONENTS AS `createEmptyEntity` + 'Text' COMPONENT
createRectButtonEntity() //RETURNS AN ENTITY ID WITH SAME COMPONENTS AS createEmptyEntity + 'Button' and 'Shape' COMPONENT
                          WITH AN A CHILD TEXT ENTITY HAVING 'Alignment' COMPONENT
createTexturedButtonEntity() //RETURNS AN ENTITY ID WITH SAME COMPONENTS AS `createEmptyEntity` + 'Button' + 'Sprite' COMPONENT
*/

/*WHY ARE TEMPLATES NECCESSARY?*/

/*
- MOST ENTITIES WOULD NEED 4 BASIC COMPONENTS SUCH AS 'Transform' 'EntityActive' 'Parent' AND 'Children'
- TEMPLATES ARE A FAST WAY TO ATTACH THIS COMPONENTS WITH DEFAULT PROPERTIES.
- YOU CAN THAN CUSTOMIZE THE COMPONENTS USING `entityManager.getComponent()` IF YOU WANT TO CHANGE SOME PROPERTIES.
*/