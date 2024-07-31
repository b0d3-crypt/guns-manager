INSERT INTO imagem (id, nome, imagem) 
VALUES (1, 'Colt Python', 'http://localhost:5005/magnum_python.png') ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (2, 'Glock 19', 'http://localhost:5005/glock19.jpg')ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (3, 'Smith & Wesson Model 29', 'http://localhost:5005/S&W_Model_29_comparison.jpg')ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (4, 'Cobra .38', 'http://localhost:5005/Cobra_38spl.png')ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (5, 'Astra 680', 'http://localhost:5005/Astra_680_-_38.png')ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (6, 'Astra .44', 'http://localhost:5005/Astra_44.png')ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (7, 'Alfa Proj 9mm', 'http://localhost:5005/Alfa-Proj-9mm.png')ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (8, 'Armalite AR-7', 'http://localhost:5005/AR7rifle.jpg')ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (9, 'M400 rifle', 'http://localhost:5005/M400_rifle.jpg')ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (10, 'Simonov SKS-45', 'http://localhost:5005/Simonow_SKS_45.jpg')ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (11, 'SVT-40', 'http://localhost:5005/SVT-40.jpg')ON CONFLICT (id) DO NOTHING;
INSERT INTO imagem (id, nome, imagem) 
VALUES (12, 'Zijiang M99', 'http://localhost:5005/ZijiangM99.jpg')ON CONFLICT (id) DO NOTHING;



INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (1, 'Colt Python', 'Calibre: .357 Magnum | Capacidade: Geralmente 6 tiros | O Colt Python é conhecido por sua precisão e qualidade de fabricação. Foi muito popular entre policiais e atiradores esportivos. Possui um mecanismo de disparo suave e é reconhecido por seu design robusto e confiável.', 1)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (2, 'Glock 19', 'Calibre: 9mm | Capacidade: Geralmente 15 tiros (varia conforme o modelo e o carregador) | A Glock 19 é uma das pistolas mais populares do mundo, amplamente utilizada por forças policiais e civis. É conhecida por sua confiabilidade, simplicidade de design e facilidade de manutenção. Fabricada em polímero resistente, é leve e confortável de manejar.', 2)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (3, 'Smith & Wesson Model 29', 'Calibre: .44 Magnum | Capacidade: Geralmente 6 tiros | O Smith & Wesson Model 29 é famoso por ser o revólver usado por Clint Eastwood no filme: Dirty Harry. É um revólver robusto e poderoso, projetado para o calibre .44 Magnum, conhecido por sua potência de parada e capacidade de disparo. É popular entre entusiastas de armas de fogo e colecionadores.', 3)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (4, 'Cobra .38', 'Calibre: .38 Special | Capacidade: 5 tiros | A Cobra .38 é um revólver compacto conhecido por sua confiabilidade e tamanho portátil. Calibrado para cartuchos .38 Special, é frequentemente utilizado para defesa pessoal devido ao seu manejo fácil e robustez.', 4)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (5, 'Astra 680', 'Calibre: Disponível em diferentes calibres, como .32 S&W Long e .38 Special | Capacidade: Varia conforme o modelo específico | O Astra 680 é um revólver fabricado pela empresa espanhola Astra-Unceta y Cia SA. Disponível em diferentes calibres, como .32 S&W Long e .38 Special, é valorizado por sua precisão e durabilidade, sendo uma escolha comum entre atiradores esportivos e para defesa pessoal.', 5)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (6, 'Astra .44', 'Calibre: .44 Magnum | Capacidade: Geralmente 6 tiros | O Astra .44 refere-se a uma linha de revólveres produzidos pela Astra, muitas vezes calibrados para o poderoso cartucho .44 Magnum. Conhecidos por sua potência de fogo e robustez, esses revólveres são usados tanto por civis quanto por profissionais da aplicação da lei.', 6)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (7, 'Alfa Proj 9mm', 'Calibre: 9mm | Capacidade: Varia conforme o modelo específico | O Alfa Proj 9mm é um revólver da marca tcheca Alfa Proj, calibrado para o cartucho 9mm. Conhecido por seu design robusto e confiável, é utilizado em várias aplicações, desde defesa pessoal até competições de tiro esportivo, destacando-se por sua precisão e ergonomia.', 7)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (8, 'Armalite AR-7', 'Calibre: .22 LR | Capacidade: 8 tiros (carregador) | Rifle semi-automático projetado como uma arma de sobrevivência e pequeno porte. Famoso por sua capacidade de desmontagem e armazenamento dentro da coronha.', 8)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (9, 'M400 rifle', 'Calibre: 5.56x45mm NATO | Capacidade: Varia conforme o carregador utilizado (geralmente entre 20 e 30 tiros) | Rifle de assalto modular usado principalmente por forças militares e policiais. Conhecido por sua precisão e confiabilidade em diversas condições.', 9)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (10, 'Simonov SKS-45', 'Calibre: 7.62x39mm | Capacidade: 10 tiros (carregador interno) | Carabina de fogo seletivo projetada por Sergei Gavrilovich Simonov. Foi amplamente utilizado pelo Exército Vermelho durante a Segunda Guerra Mundial e por vários países durante a Guerra Fria.', 10)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (11, 'SVT-40', 'Calibre: 7.62x54mmR | Capacidade: 10 tiros (carregador destacável) | Fuzil semi-automático soviético desenvolvido durante a Segunda Guerra Mundial. Conhecido por sua precisão e robustez, foi usado extensivamente pelas forças armadas soviéticas.', 11)ON CONFLICT (id) DO NOTHING;
INSERT INTO produto (id, nome, descricao, imagem_id) 
VALUES (12, 'Zijiang M99', 'Calibre: .50 BMG (12.7x99mm NATO) | Capacidade: 5 tiros (carregador destacável) | Rifle de precisão chinês utilizado principalmente para longo alcance e operações antiveículo. Conhecido por seu poder de fogo e capacidade de penetração.', 12)ON CONFLICT (id) DO NOTHING;