describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    }
    );
  
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
        assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz", 33), "hijklmnopqrstuvwxyzabcdefg");
      }
      );
      
    it('debería retornar "ÁÉÍÓÚ" para "ÁÉÍÓÚ" con offset 33', () => {
        assert.equal(cipher.encode("ÁÉÍÓÚ", 33), "ÁÉÍÓÚ");
      }
      );

      it('debería retornar "áøêð÷" para "áéíóú" con offset 33', () => {
        assert.equal(cipher.encode("áéíóú", 33), "áøêð÷");
      }
      );    
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }); 
    
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33), "abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "ÁÉÍÓÚ" para "ÁÉÍÓÚ" con offset 33', () => {
      assert.equal(cipher.decode("ÁÉÍÓÚ", 33), "ÁÉÍÓÚ");
    }); 

    it('debería retornar "áéíóú" para "áøêð÷" con offset 33', () => {
      assert.equal(cipher.decode("áøêð÷", 33), "áéíóú");
    }); 
  });
  });