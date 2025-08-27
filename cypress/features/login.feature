
Feature: Connexion à Sauce Demo

  @smoke @positif @tc-001
  Scenario: Connexion avec des identifiants valides
    Given je visite le lien "https://www.saucedemo.com/"
    When je saisis le username "standard_user"
    And je saisis le mot de passe "secret_sauce"
    And je clique sur le bouton login
    Then je suis connecté et redirigé vers le dashboard

  @smoke @negatif @tc-002
  Scenario: Connexion avec des identifiants invalides
    Given je visite le lien "https://www.saucedemo.com/"
    When je saisis le username "invalid_user"
    And je saisis le mot de passe "wrong_password"
    And je clique sur le bouton login
    Then un message d'erreur de connexion s'affiche
