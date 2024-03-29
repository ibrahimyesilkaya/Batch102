public with sharing class AccountController {
    //6- otomatik olusan methodu silin
    //7- wire decorator kullanabilmek icin @AuraEnabled(cacheable=true) method basina yazilmalidir.
     @AuraEnabled(cacheable=false)
     public static List<Account> getAccounts(String filter){ //8- parametre olarak JS'de belirledigim filter yazilmalidir

        String keyName = '%' + filter + '%'; //wildcards (joker karakterler) kullandik %aramakelimesi%
        List<Account> accountList = [SELECT Id, Name, Phone FROM Account WHERE Name LIKE :keyName WITH SECURITY_ENFORCED];
        return accountList;
     }
}