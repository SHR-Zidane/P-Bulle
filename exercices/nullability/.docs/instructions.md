# Instructions

Lorsque vous travaillez pour une usine, il devient nécessaire de créer le message imprimé sur les badges des employés. Vous décidez d'implémenter cette fonction en JavaScript.

Un badge nécessite l'« identifiant » de l'employé, le « nom » de l'employé, ainsi que le service dans lequel il travaille.

## 1. Créez le texte du badge

Implémentez une fonction nommée `printBadge` qui renvoie le texte à imprimer sur le badge.

Le nom de l'employé est toujours fourni, mais le numéro d'identification de l'employé et le nom du service peuvent être « nuls ». Le numéro « id » de l'employé, s'il est fourni, doit être entre crochets (par exemple « [20] »).

Le badge d'un propriétaire ne doit pas avoir d'identifiant ou de département.
```javascript
printBadge(20, 'Bob', 'Marketing');
// => '[20] Bob - MARKETING'
```
